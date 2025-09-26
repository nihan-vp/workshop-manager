function renderHeader() {
  document.getElementById('mainHeader').innerHTML = `
    <div class="header-inner">
      <button id="menuToggle" aria-label="Toggle menu" class="tab-btn">&#9776;</button>
      <span class="brand" style="font-size:1.3em;">WMS</span>
      <span style="flex:1"></span>
      <button id="logoutBtn" class="secondary-btn">Logout</button>
    </div>
  `;
  document.getElementById('logoutBtn').onclick = () => {
    firebase.auth().signOut().then(()=>{ location.href='index.html'; });
  };
  document.getElementById('menuToggle').onclick = () => {
    document.getElementById('sidebar').classList.toggle('hide');
  };
}
function renderSidebar() {
  document.getElementById('sidebar').innerHTML = `
    <nav>
      <a href="dashboard.html">Dashboard</a>
      <a href="customers.html">Customers</a>
      <a href="billing.html">Billing</a>
      <a href="bill_history.html">Bill History</a>
      <a href="stock.html">Stock</a>
      <a href="salaries.html">Salaries</a>
      <a href="warranties.html">Warranty Packages</a>
      <a href="product_warranties.html">Product Warranties</a>
      <a href="expenses.html">Expenses</a>
      <a href="settings.html">Settings</a>
      <a href="profile.html">Profile</a>
    </nav>
  `;
}
window.addEventListener('DOMContentLoaded', () => {
  if(document.getElementById('mainHeader')) renderHeader();
  if(document.getElementById('sidebar')) renderSidebar();
});