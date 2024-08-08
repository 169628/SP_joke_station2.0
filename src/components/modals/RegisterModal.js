function RegisterModal() {
  return (
    <>
      <div
        className="modal fade"
        id="registerToggle"
        aria-hidden="true"
        aria-labelledby="registerToggleLabel"
        tabIndex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="registerToggleLabel">
                會員註冊
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
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">暱稱</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="mail"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label htmlFor="floatingPassword">信箱</label>
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
                data-bs-target="#registerToggle2"
                data-bs-toggle="modal"
              >
                註冊會員
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="registerToggle2"
        aria-hidden="true"
        aria-labelledby="registerToggleLabel2"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="registerToggleLabel2">
                請至註冊信箱領取暫時密碼
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              請至註冊信箱領取暫時密碼，並以暫時密碼登入網站後再修改密碼
              <img src="" className="img-fluid" alt="提示圖片"></img>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-outline-primary"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                知道了，到登入畫面
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterModal;
