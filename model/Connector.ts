export interface ConnectInfo {
  data: {
    origin: string;
    token: string;
    targetObject: {
      data: {
        id: string;
      };
    };
  };
}

export interface IConnector {
  APIRequest: Function;
  closeDialog: Function;
  closeToast: Function;
  endBlockUI: Function;
  finalize: Function;
  getDefaultData: Function;
  getOrigin: Function;
  getToken: Function;
  init: Function;
  openDialog: Function;
  openToast: Function;
  reset: Function;
  setErrorPath: Function;
  setNavigate: Function;
  startBlockUI: Function;
}
