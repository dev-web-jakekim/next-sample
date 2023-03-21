import { enableStaticRendering } from 'mobx-react';

import { makeAutoObservable } from 'mobx';
import { enableLogging } from 'mobx-logger';
import { makePersistable } from 'mobx-persist-store';

interface InitData {
  token: string | null;
  origin: string | null;
  targetObject: object;
}

const loggerConfig = {
  action: true,
};

const isServer = typeof window === 'undefined';

enableLogging(loggerConfig);
enableStaticRendering(isServer);

class CommonStore {
  token: string | null = null;

  origin: string | null = null;

  targetObject: object = {};

  blockUI: boolean = false;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
    if (!isServer) {
      makePersistable(this, {
        name: 'commonStore',
        properties: ['token', 'origin', 'targetObject'],
        storage: window.localStorage,
      });
    }
  }

  set initData(initData: InitData) {
    const { token, origin, targetObject } = initData;
    this.origin = origin;
    this.token = token;
    this.targetObject = targetObject;
  }

  set blockUIState(isBlock: boolean) {
    this.blockUI = isBlock;
  }
}

const commonStore = new CommonStore();
export default commonStore;
