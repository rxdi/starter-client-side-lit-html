export as namespace History;

export interface StartOptions {
    pushState?: boolean;
    hashChange?: boolean;
    root?: "/";
    silent?: boolean;
    location?: Location;
    history?: History;
}

export interface UpdateOptions {
    trigger?: boolean,
    replace?: boolean,
}

export interface PrivateHistory {
    update(path: string, options?: UpdateOptions): void;
    start(options?: StartOptions): void;

    onChange(callback: (path) => void): void;
}

declare var History: {
    prototype: History;
    new(): PrivateHistory;
};


export default History;