export interface QRCodeOptions {
    width?: number;
    margin?: number;
    color?: {
        dark?: string;
        light?: string;
    };
    errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H';
}
export declare const useQRCode: () => {
    generateQRCode: (text: string, options?: QRCodeOptions) => Promise<string>;
    generateQRCodeSVG: (text: string, options?: QRCodeOptions) => Promise<string>;
};
