var Dashboard = React.createClass({
  render: function () {
    return (
      <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* Tell the browser to be responsive to screen width */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="wrappixel, admin dashboard, html css dashboard, web dashboard, bootstrap 5 admin, bootstrap 5, css3 dashboard, bootstrap 5 dashboard, Ample lite admin bootstrap 5 dashboard, frontend, responsive bootstrap 5 admin template, Ample admin lite dashboard bootstrap 5 dashboard template"
        />
        <meta
          name="description"
          content="Ample Admin Lite is powerful and clean admin dashboard template, inpired from Bootstrap Framework"
        />
        <meta name="robots" content="noindex,nofollow" />
        <title>Ample Admin Lite Template by WrapPixel</title>
        <link
          rel="canonical"
          href="https://www.wrappixel.com/templates/ample-admin-lite/"
        />
        {/* Favicon icon */}
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="plugins/images/favicon.png"
        />
        {/* Custom CSS */}
        <link
          href="plugins/bower_components/chartist/dist/chartist.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="plugins/bower_components/chartist-plugin-tooltips/dist/chartist-plugin-tooltip.css"
        />
        {/* Custom CSS */}
        <link href="css/style.min.css" rel="stylesheet" />
        {/* ============================================================== */}
        {/* Preloader - style you can find in spinners.css */}
        {/* ============================================================== */}
        <div className="preloader">
          <div className="lds-ripple">
            <div className="lds-pos" />
            <div className="lds-pos" />
          </div>
        </div>
        {/* ============================================================== */}
        {/* Main wrapper - style you can find in pages.scss */}
        {/* ============================================================== */}
        <div
          id="main-wrapper"
          data-layout="vertical"
          data-navbarbg="skin5"
          data-sidebartype="full"
          data-sidebar-position="absolute"
          data-header-position="absolute"
          data-boxed-layout="full"
        >
          {/* ============================================================== */}
          {/* Topbar header - style you can find in pages.scss */}
          {/* ============================================================== */}
          <header className="topbar" data-navbarbg="skin5">
            <nav className="navbar top-navbar navbar-expand-md navbar-dark">
              <div className="navbar-header" data-logobg="skin6">
                {/* ============================================================== */}
                {/* Logo */}
                {/* ============================================================== */}
                <a className="navbar-brand" href="dashboard.html">
                  {/* Logo icon */}
                  <b className="logo-icon">
                    {/* Dark Logo icon */}
                    <img src="plugins/images/logo-icon.png" alt="homepage" />
                  </b>
                  {/*End Logo icon */}
                  {/* Logo text */}
                  <span className="logo-text">
                    {/* dark Logo text */}
                    <img src="plugins/images/logo-text.png" alt="homepage" />
                  </span>
                </a>
                {/* ============================================================== */}
                {/* End Logo */}
                {/* ============================================================== */}
                {/* ============================================================== */}
                {/* toggle and nav items */}
                {/* ============================================================== */}
                <a
                  className="nav-toggler waves-effect waves-light text-dark d-block d-md-none"
                  href="javascript:void(0)"
                >
                  <i className="ti-menu ti-close" />
                </a>
              </div>
              {/* ============================================================== */}
              {/* End Logo */}
              {/* ============================================================== */}
              <div
                className="navbar-collapse collapse"
                id="navbarSupportedContent"
                data-navbarbg="skin5"
              >
                {/* ============================================================== */}
                {/* Right side toggle and nav items */}
                {/* ============================================================== */}
                <ul className="navbar-nav ms-auto d-flex align-items-center">
                  {/* ============================================================== */}
                  {/* Search */}
                  {/* ============================================================== */}
                  <li className=" in">
                    <form
                      role="search"
                      className="app-search d-none d-md-block me-3"
                    >
                      <input
                        type="text"
                        placeholder="Search..."
                        className="form-control mt-0"
                      />
                      <a href className="active">
                        <i className="fa fa-search" />
                      </a>
                    </form>
                  </li>
                  {/* ============================================================== */}
                  {/* User profile and search */}
                  {/* ============================================================== */}
                  <li>
                    <a className="profile-pic" href="#">
                      <img
                        src="plugins/images/users/varun.jpg"
                        alt="user-img"
                        width={36}
                        className="img-circle"
                      />
                      <span className="text-white font-medium">Steave</span>
                    </a>
                  </li>
                  {/* ============================================================== */}
                  {/* User profile and search */}
                  {/* ============================================================== */}
                </ul>
              </div>
            </nav>
          </header>
          {/* ============================================================== */}
          {/* End Topbar header */}
          {/* ============================================================== */}
          {/* ============================================================== */}
          {/* Left Sidebar - style you can find in sidebar.scss  */}
          {/* ============================================================== */}
          <aside className="left-sidebar" data-sidebarbg="skin6">
            {/* Sidebar scroll*/}
            <div className="scroll-sidebar">
              {/* Sidebar navigation*/}
              <nav className="sidebar-nav">
                <ul id="sidebarnav">
                  {/* User Profile*/}
                  <li className="sidebar-item pt-2">
                    <a
                      className="sidebar-link waves-effect waves-dark sidebar-link"
                      href="dashboard.html"
                      aria-expanded="false"
                    >
                      <i className="far fa-clock" aria-hidden="true" />
                      <span className="hide-menu">Dashboard</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link waves-effect waves-dark sidebar-link"
                      href="profile.html"
                      aria-expanded="false"
                    >
                      <i className="fa fa-user" aria-hidden="true" />
                      <span className="hide-menu">Profile</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link waves-effect waves-dark sidebar-link"
                      href="basic-table.html"
                      aria-expanded="false"
                    >
                      <i className="fa fa-table" aria-hidden="true" />
                      <span className="hide-menu">Basic Table</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link waves-effect waves-dark sidebar-link"
                      href="fontawesome.html"
                      aria-expanded="false"
                    >
                      <i className="fa fa-font" aria-hidden="true" />
                      <span className="hide-menu">Icon</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link waves-effect waves-dark sidebar-link"
                      href="map-google.html"
                      aria-expanded="false"
                    >
                      <i className="fa fa-globe" aria-hidden="true" />
                      <span className="hide-menu">Google Map</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link waves-effect waves-dark sidebar-link"
                      href="blank.html"
                      aria-expanded="false"
                    >
                      <i className="fa fa-columns" aria-hidden="true" />
                      <span className="hide-menu">Blank Page</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link waves-effect waves-dark sidebar-link"
                      href="404.html"
                      aria-expanded="false"
                    >
                      <i className="fa fa-info-circle" aria-hidden="true" />
                      <span className="hide-menu">Error 404</span>
                    </a>
                  </li>
                </ul>
              </nav>
              {/* End Sidebar navigation */}
            </div>
            {/* End Sidebar scroll*/}
          </aside>
          {/* ============================================================== */}
          {/* End Left Sidebar - style you can find in sidebar.scss  */}
          {/* ============================================================== */}
          {/* ============================================================== */}
          {/* Page wrapper  */}
          {/* ============================================================== */}
          <div className="page-wrapper">
            {/* ============================================================== */}
            {/* Bread crumb and right sidebar toggle */}
            {/* ============================================================== */}
            <div className="page-breadcrumb bg-white">
              <div className="row align-items-center">
                <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                  <h4 className="page-title">Dashboard</h4>
                </div>
              </div>
              {/* /.col-lg-12 */}
            </div>
            {/* ============================================================== */}
            {/* End Bread crumb and right sidebar toggle */}
            {/* ============================================================== */}
            {/* ============================================================== */}
            {/* Container fluid  */}
            {/* ============================================================== */}
            <div className="container-fluid">
              {/* ============================================================== */}
              {/* Three charts */}
              {/* ============================================================== */}
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-12">
                  <div className="white-box analytics-info">
                    <h3 className="box-title">Total Orders</h3>
                    <ul className="list-inline two-part d-flex align-items-center mb-0">
                      <li>
                        <div id="sparklinedash">
                          <canvas
                            width={67}
                            height={30}
                            style={{
                              display: "inline-block",
                              width: "67px",
                              height: "30px",
                              verticalAlign: "top",
                            }}
                          />
                        </div>
                      </li>
                      <li className="ms-auto">
                        <span className="counter text-success">659</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="white-box analytics-info">
                    <h3 className="box-title">Total Refunds</h3>
                    <ul className="list-inline two-part d-flex align-items-center mb-0">
                      <li>
                        <div id="sparklinedash2">
                          <canvas
                            width={67}
                            height={30}
                            style={{
                              display: "inline-block",
                              width: "67px",
                              height: "30px",
                              verticalAlign: "top",
                            }}
                          />
                        </div>
                      </li>
                      <li className="ms-auto">
                        <span className="counter text-purple">869</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="white-box analytics-info">
                    <h3 className="box-title">On Time Delivery</h3>
                    <ul className="list-inline two-part d-flex align-items-center mb-0">
                      <li>
                        <div id="sparklinedash3">
                          <canvas
                            width={67}
                            height={30}
                            style={{
                              display: "inline-block",
                              width: "67px",
                              height: "30px",
                              verticalAlign: "top",
                            }}
                          />
                        </div>
                      </li>
                      <li className="ms-auto">
                        <span className="counter text-info">911</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* ============================================================== */}
              {/* PRODUCTS YEARLY SALES */}
              {/* ============================================================== */}
              <div className="row">
                <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                  <div className="white-box">
                    <h3 className="box-title">Products Yearly Sales</h3>
                    <div className="d-md-flex">
                      <ul className="list-inline d-flex ms-auto">
                        <li className="ps-3">
                          <h5>
                            <i className="fa fa-circle me-1 text-info" />
                            Mac
                          </h5>
                        </li>
                        <li className="ps-3">
                          <h5>
                            <i className="fa fa-circle me-1 text-inverse" />
                            Windows
                          </h5>
                        </li>
                      </ul>
                    </div>
                    <div id="ct-visits" style={{ height: "405px" }}>
                      <div
                        className="chartist-tooltip"
                        style={{ top: "-17px", left: "-12px" }}
                      >
                        <span className="chartist-tooltip-value">6</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ============================================================== */}
              {/* RECENT SALES */}
              {/* ============================================================== */}
              <div className="row">
                <div className="col-md-12 col-lg-12 col-sm-12">
                  <div className="white-box">
                    <div className="d-md-flex mb-3">
                      <h3 className="box-title mb-0">Recent sales</h3>
                      <div className="col-md-3 col-sm-4 col-xs-6 ms-auto">
                        <select className="form-select shadow-none row border-top">
                          <option>March 2021</option>
                          <option>April 2021</option>
                          <option>May 2021</option>
                          <option>June 2021</option>
                          <option>July 2021</option>
                        </select>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table className="table no-wrap">
                        <thead>
                          <tr>
                            <th className="border-top-0">#</th>
                            <th className="border-top-0">Name</th>
                            <th className="border-top-0">Status</th>
                            <th className="border-top-0">Date</th>
                            <th className="border-top-0">Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td className="txt-oflo">Elite admin</td>
                            <td>DELIVERED</td>
                            <td className="txt-oflo">April 18, 2021</td>
                            <td>
                              <span className="text-success">$24</span>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td className="txt-oflo">Real Homes WP Theme</td>
                            <td>IN PROGRESS</td>
                            <td className="txt-oflo">April 19, 2021</td>
                            <td>
                              <span className="text-info">$1250</span>
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td className="txt-oflo">Ample Admin</td>
                            <td>IN PROGRESS</td>
                            <td className="txt-oflo">April 19, 2021</td>
                            <td>
                              <span className="text-info">$1250</span>
                            </td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td className="txt-oflo">Medical Pro WP Theme</td>
                            <td>MANUFACTURED</td>
                            <td className="txt-oflo">April 20, 2021</td>
                            <td>
                              <span className="text-danger">-$24</span>
                            </td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td className="txt-oflo">Hosting press html</td>
                            <td>DELIVERED</td>
                            <td className="txt-oflo">April 21, 2021</td>
                            <td>
                              <span className="text-success">$24</span>
                            </td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td className="txt-oflo">Digital Agency PSD</td>
                            <td>DELIVERED</td>
                            <td className="txt-oflo">April 23, 2021</td>
                            <td>
                              <span className="text-danger">-$14</span>
                            </td>
                          </tr>
                          <tr>
                            <td>7</td>
                            <td className="txt-oflo">Helping Hands WP Theme</td>
                            <td>PICKED BY DRIVER</td>
                            <td className="txt-oflo">April 22, 2021</td>
                            <td>
                              <span className="text-success">$64</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              {/* ============================================================== */}
              {/* Recent Comments */}
              {/* ============================================================== */}
              <div className="row">
                {/* .col */}
                <div className="col-md-12 col-lg-8 col-sm-12">
                  <div className="card white-box p-0">
                    <div className="card-body">
                      <h3 className="box-title mb-0">Recent Comments</h3>
                    </div>
                    <div className="comment-widgets">
                      {/* Comment Row */}
                      <div className="d-flex flex-row comment-row p-3 mt-0">
                        <div className="p-2">
                          <img
                            src="plugins/images/users/varun.jpg"
                            alt="user"
                            width={50}
                            className="rounded-circle"
                          />
                        </div>
                        <div className="comment-text ps-2 ps-md-3 w-100">
                          <h5 className="font-medium">James Anderson</h5>
                          <span className="mb-3 d-block">
                            Lorem Ipsum is simply dummy text of the printing and
                            type setting industry.It has survived not only five
                            centuries.{" "}
                          </span>
                          <div className="comment-footer d-md-flex align-items-center">
                            <span className="badge bg-primary rounded">
                              Pending
                            </span>
                            <div className="text-muted fs-2 ms-auto mt-2 mt-md-0">
                              April 14, 2021
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Comment Row */}
                      <div className="d-flex flex-row comment-row p-3">
                        <div className="p-2">
                          <img
                            src="plugins/images/users/genu.jpg"
                            alt="user"
                            width={50}
                            className="rounded-circle"
                          />
                        </div>
                        <div className="comment-text ps-2 ps-md-3 active w-100">
                          <h5 className="font-medium">Michael Jorden</h5>
                          <span className="mb-3 d-block">
                            Lorem Ipsum is simply dummy text of the printing and
                            type setting industry.It has survived not only five
                            centuries.{" "}
                          </span>
                          <div className="comment-footer d-md-flex align-items-center">
                            <span className="badge bg-success rounded">
                              Approved
                            </span>
                            <div className="text-muted fs-2 ms-auto mt-2 mt-md-0">
                              April 14, 2021
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Comment Row */}
                      <div className="d-flex flex-row comment-row p-3">
                        <div className="p-2">
                          <img
                            src="plugins/images/users/ritesh.jpg"
                            alt="user"
                            width={50}
                            className="rounded-circle"
                          />
                        </div>
                        <div className="comment-text ps-2 ps-md-3 w-100">
                          <h5 className="font-medium">Johnathan Doeting</h5>
                          <span className="mb-3 d-block">
                            Lorem Ipsum is simply dummy text of the printing and
                            type setting industry.It has survived not only five
                            centuries.{" "}
                          </span>
                          <div className="comment-footer d-md-flex align-items-center">
                            <span className="badge rounded bg-danger">
                              Rejected
                            </span>
                            <div className="text-muted fs-2 ms-auto mt-2 mt-md-0">
                              April 14, 2021
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                  <div className="card white-box p-0">
                    <div className="card-heading">
                      <h3 className="box-title mb-0">Chat Listing</h3>
                    </div>
                    <div className="card-body">
                      <ul className="chatonline">
                        <li>
                          <div className="call-chat">
                            <button
                              className="btn btn-success text-white btn-circle btn"
                              type="button"
                            >
                              <i className="fas fa-phone" />
                            </button>
                            <button
                              className="btn btn-info btn-circle btn"
                              type="button"
                            >
                              <i className="far fa-comments text-white" />
                            </button>
                          </div>
                          <a
                            href="javascript:void(0)"
                            className="d-flex align-items-center"
                          >
                            <img
                              src="plugins/images/users/varun.jpg"
                              alt="user-img"
                              className="img-circle"
                            />
                            <div className="ms-2">
                              <span className="text-dark">
                                Varun Dhavan{" "}
                                <small className="d-block text-success d-block">
                                  online
                                </small>
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <div className="call-chat">
                            <button
                              className="btn btn-success text-white btn-circle btn"
                              type="button"
                            >
                              <i className="fas fa-phone" />
                            </button>
                            <button
                              className="btn btn-info btn-circle btn"
                              type="button"
                            >
                              <i className="far fa-comments text-white" />
                            </button>
                          </div>
                          <a
                            href="javascript:void(0)"
                            className="d-flex align-items-center"
                          >
                            <img
                              src="plugins/images/users/genu.jpg"
                              alt="user-img"
                              className="img-circle"
                            />
                            <div className="ms-2">
                              <span className="text-dark">
                                Genelia Deshmukh{" "}
                                <small className="d-block text-warning">
                                  Away
                                </small>
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <div className="call-chat">
                            <button
                              className="btn btn-success text-white btn-circle btn"
                              type="button"
                            >
                              <i className="fas fa-phone" />
                            </button>
                            <button
                              className="btn btn-info btn-circle btn"
                              type="button"
                            >
                              <i className="far fa-comments text-white" />
                            </button>
                          </div>
                          <a
                            href="javascript:void(0)"
                            className="d-flex align-items-center"
                          >
                            <img
                              src="plugins/images/users/ritesh.jpg"
                              alt="user-img"
                              className="img-circle"
                            />
                            <div className="ms-2">
                              <span className="text-dark">
                                Ritesh Deshmukh{" "}
                                <small className="d-block text-danger">
                                  Busy
                                </small>
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <div className="call-chat">
                            <button
                              className="btn btn-success text-white btn-circle btn"
                              type="button"
                            >
                              <i className="fas fa-phone" />
                            </button>
                            <button
                              className="btn btn-info btn-circle btn"
                              type="button"
                            >
                              <i className="far fa-comments text-white" />
                            </button>
                          </div>
                          <a
                            href="javascript:void(0)"
                            className="d-flex align-items-center"
                          >
                            <img
                              src="plugins/images/users/arijit.jpg"
                              alt="user-img"
                              className="img-circle"
                            />
                            <div className="ms-2">
                              <span className="text-dark">
                                Arijit Sinh{" "}
                                <small className="d-block text-muted">
                                  Offline
                                </small>
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <div className="call-chat">
                            <button
                              className="btn btn-success text-white btn-circle btn"
                              type="button"
                            >
                              <i className="fas fa-phone" />
                            </button>
                            <button
                              className="btn btn-info btn-circle btn"
                              type="button"
                            >
                              <i className="far fa-comments text-white" />
                            </button>
                          </div>
                          <a
                            href="javascript:void(0)"
                            className="d-flex align-items-center"
                          >
                            <img
                              src="plugins/images/users/govinda.jpg"
                              alt="user-img"
                              className="img-circle"
                            />
                            <div className="ms-2">
                              <span className="text-dark">
                                Govinda Star{" "}
                                <small className="d-block text-success">
                                  online
                                </small>
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <div className="call-chat">
                            <button
                              className="btn btn-success text-white btn-circle btn"
                              type="button"
                            >
                              <i className="fas fa-phone" />
                            </button>
                            <button
                              className="btn btn-info btn-circle btn"
                              type="button"
                            >
                              <i className="far fa-comments text-white" />
                            </button>
                          </div>
                          <a
                            href="javascript:void(0)"
                            className="d-flex align-items-center"
                          >
                            <img
                              src="plugins/images/users/hritik.jpg"
                              alt="user-img"
                              className="img-circle"
                            />
                            <div className="ms-2">
                              <span className="text-dark">
                                John Abraham
                                <small className="d-block text-success">
                                  online
                                </small>
                              </span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* /.col */}
              </div>
            </div>
            {/* ============================================================== */}
            {/* End Container fluid  */}
            {/* ============================================================== */}
            {/* ============================================================== */}
            {/* footer */}
            {/* ============================================================== */}
            <footer className="footer text-center">
              {" "}
              2021 © Ample Admin brought to you by{" "}
              <a href="https://www.wrappixel.com/">wrappixel.com</a>
            </footer>
            {/* ============================================================== */}
            {/* End footer */}
            {/* ============================================================== */}
          </div>
          {/* ============================================================== */}
          {/* End Page wrapper  */}
          {/* ============================================================== */}
        </div>
        {/* ============================================================== */}
        {/* End Wrapper */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* All Jquery */}
        {/* ============================================================== */}
        {/* Bootstrap tether Core JavaScript */}
        {/*Wave Effects */}
        {/*Menu sidebar */}
        {/*Custom JavaScript */}
        {/*This page JavaScript */}
        {/*chartis chart*/}
      </div>
    );
  },
});
