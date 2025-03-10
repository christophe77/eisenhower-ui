import { FC, ReactNode } from 'react';
export type FormProps = {
    action?: (formData: FormData) => void | Promise<void>;
    children?: ReactNode;
};
export declare const Form: FC<FormProps>;
//# sourceMappingURL=Form.d.ts.map