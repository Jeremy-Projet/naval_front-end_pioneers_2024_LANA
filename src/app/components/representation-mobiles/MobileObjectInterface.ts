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
    displayId: number;
    x: number;
    y: number;
    z: number;
    size: number;
    color: string;
    shape: 'triangle' | 'square' | 'losange' | 'circle';
    kinematics: Kinematics;
}

