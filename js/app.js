// CommunityPulse – Client-side logic (in-memory only)

let students = [];
let reports = [];
let currentStudent = null;
let reportSeq = 1;

const views = document.querySelectorAll('.view');

function showView(id) {
  views.forEach(v => v.classList.remove('active'));
  const el = document.getElementById('view-' + id);
  if (el) el.classList.add('active');

  if (id === 'indigene-track') {
    renderReports('indigene-report-list', reports, false);
  }
  if (id === 'student-dashboard') {
    renderReports(
      'student-report-list',
      reports.filter(r => r.reporter === currentStudent.email),
      false
    );
  }
  if (id === 'admin-dashboard') {
    renderReports('admin-report-list', reports, true);
    renderStats();
  }
}

// Role selection
document.querySelectorAll('.role-card').forEach(card => {
  card.addEventListener('click', () => {
    const role = card.dataset.role;
    if (role === 'student') showView('student-login');
    if (role === 'indigene') showView('indigene-track');
    if (role === 'admin') showView('admin-login');
  });
});

// Back buttons
document.querySelectorAll('[data-back]').forEach(btn => {
  btn.addEventListener('click', () => showView(btn.dataset.back));
});

// Internal navigation links
document.querySelectorAll('[data-goto]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    showView(link.dataset.goto);
  });
});

// Student registration
document.getElementById('form-register').addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim().toLowerCase();
  const password = document.getElementById('reg-password').value;

  if (students.some(s => s.email === email)) {
    alert('That email is already registered. Please log in instead.');
    return;
  }

  students.push({ name, email, password });
  e.target.reset();
  alert('Registration successful. You can now log in.');
  showView('student-login');
});

// Student login
document.getElementById('form-student-login').addEventListener('submit', e => {
  e.preventDefault();
  const email = document.getElementById('login-email').value.trim().toLowerCase();
  const password = document.getElementById('login-password').value;
  const match = students.find(s => s.email === email && s.password === password);

  if (!match) {
    alert('No matching account found. Check your details or register first.');
    return;
  }

  currentStudent = match;
  document.getElementById('student-name-tag').textContent = match.name;
  e.target.reset();
  showView('student-dashboard');
});

// Submit report
document.getElementById('form-report').addEventListener('submit', e => {
  e.preventDefault();
  const title = document.getElementById('rpt-title').value.trim();
  const category = document.getElementById('rpt-category').value;
  const desc = document.getElementById('rpt-desc').value.trim();

  reports.push({
    id: reportSeq++,
    title,
    category,
    desc,
    reporter: currentStudent.email,
    reporterName: currentStudent.name,
    status: 'Open',
    date: new Date().toLocaleDateString()
  });

  e.target.reset();
  renderReports(
    'student-report-list',
    reports.filter(r => r.reporter === currentStudent.email),
    false
  );
});

// Admin login
document.getElementById('form-admin-login').addEventListener('submit', e => {
  e.preventDefault();
  const user = document.getElementById('admin-user').value.trim();
  const pass = document.getElementById('admin-pass').value;

  if (user !== 'admin' || pass !== 'admin') {
    alert('Incorrect credentials. Demo login is admin / admin.');
    return;
  }

  e.target.reset();
  showView('admin-dashboard');
});

function renderReports(containerId, list, isAdmin) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  if (list.length === 0) {
    container.innerHTML = '<p class="empty-state">No reports yet.</p>';
    return;
  }

  list.slice().reverse().forEach(r => {
    const card = document.createElement('div');
    card.className = 'report-card';
    const statusClass = r.status.replace(' ', '-');

    card.innerHTML = `
      <h3>${escapeHtml(r.title)}</h3>
      <p>${escapeHtml(r.desc)}</p>
      <div class="report-meta">
        <span class="tag ${r.category}">${r.category}</span>
        <span class="status ${statusClass}">${r.status}</span>
        <span class="meta-date">${r.date} · ${escapeHtml(r.reporterName || 'Anonymous')}</span>
      </div>
    `;

    if (isAdmin) {
      const controls = document.createElement('div');
      controls.className = 'admin-controls';

      const select = document.createElement('select');
      ['Open', 'In Progress', 'Resolved'].forEach(s => {
        const opt = document.createElement('option');
        opt.value = s;
        opt.textContent = s;
        if (s === r.status) opt.selected = true;
        select.appendChild(opt);
      });
      select.addEventListener('change', () => {
        r.status = select.value;
        renderReports('admin-report-list', reports, true);
        renderStats();
      });

      const delBtn = document.createElement('button');
      delBtn.className = 'small-btn';
      delBtn.textContent = 'Delete';
      delBtn.addEventListener('click', () => {
        reports = reports.filter(item => item.id !== r.id);
        renderReports('admin-report-list', reports, true);
        renderStats();
      });

      controls.appendChild(select);
      controls.appendChild(delBtn);
      card.appendChild(controls);
    }

    container.appendChild(card);
  });
}

function renderStats() {
  const open = reports.filter(r => r.status === 'Open').length;
  const progress = reports.filter(r => r.status === 'In Progress').length;
  const resolved = reports.filter(r => r.status === 'Resolved').length;

  document.getElementById('admin-stats').innerHTML = `
    <div class="stat"><span class="num">${reports.length}</span><span class="lbl">Total</span></div>
    <div class="stat"><span class="num">${open}</span><span class="lbl">Open</span></div>
    <div class="stat"><span class="num">${progress}</span><span class="lbl">In Progress</span></div>
    <div class="stat"><span class="num">${resolved}</span><span class="lbl">Resolved</span></div>
  `;
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
