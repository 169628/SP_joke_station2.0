function LoginModal() {
  return (
    <>
      <div
        className="modal fade"
        id="loginToggle"
        aria-hidden="true"
        aria-labelledby="loginToggleLabel"
        tabIndex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="loginToggleLabel">
                登入會員
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="form-floating mb-3">
                <input
                  type="mail"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">信箱</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label htmlFor="floatingPassword">密碼</label>
              </div>
              <div className="d-grid gap-2 col-6 mx-auto">
                <button
                  className="btn btn-outline-primary d-flex flex-column align-items-center flex-md-row justify-content-md-evenly"
                  type="button"
                >
                  <i className="bi bi-google "></i>
                  <span>以 google 帳號登入</span>
                </button>
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-outline-primary"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                登入
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginModal;
