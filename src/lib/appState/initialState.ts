export type DeviceProps = 'mobile' | 'tablet' | 'desktop' | undefined;
export type RenderPopUpProps = 'BookIsRead' | 'SuccessAddedBook' | null;

export interface IAppState {
  isLoading: boolean;
  error: string | null;
  popUp: RenderPopUpProps;
  device: DeviceProps;
}

export const initialState: IAppState = {
  isLoading: false,
  error: null,
  popUp: null,
  device: undefined,
};
