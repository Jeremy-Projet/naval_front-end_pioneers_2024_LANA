// MobileObjectInterface.ts
export interface Kinematics {
    xM: number;
    yM: number;
    zM: number;
    speedMS: number;
    headingRad: number;
    orientationRad: number;
    spinningSpeedRadS: number;
}

export interface MobileObject {
    eventType: string; // INITIAL_LOAD, MOBILES_CREATED, MOBILES_UPDATED, MOBILES_DELETED, SIMULATION_CONFIG_UPDATED
    mobiles: Mobiles[];
    updateTimestampMs: number;
}

export interface Mobiles {

  id: number;
  displayId: string;
  environment: string;
  creationTimestampMs: number;
  updateTimestampMs: number;
  kinematics: Kinematics;
  shape: 'triangle' | 'square' | 'losange' | 'circle';
  color: string;
  extraMobileData1: {
    data1: number;
    data2: number;
    data3: string;
    data4: number;
    data5: number;
    data6: string;
    data7: number;
    data8: boolean;
  };
  extraMobileData2: {
    data1: number;
    data2: number;
    data3: string;
    data4: number;
    data5: number;
    data6: string;
    data7: number;
    data8: boolean;
  };
}


=======
    displayId: number;
    x: number;
    y: number;
    z: number;
    size: number;
    color: string;
    shape: 'triangle' | 'square' | 'losange' | 'circle';
    kinematics: Kinematics;
}

