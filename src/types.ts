export enum CameraMode {
	User = 'user',
	Environment = 'environment'
}

export interface IButtons {
	take_photo: HTMLButtonElement
}

export abstract class Defaults {
	static width: number = 640
}