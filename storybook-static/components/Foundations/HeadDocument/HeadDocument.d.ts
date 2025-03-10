import { ReactNode, FC } from '../../../../node_modules/react';
type Link = {
    rel: string;
    href: string;
};
type Meta = {
    name: string;
    content: string;
};
export interface HeadDocumentProps {
    title?: string;
    metas?: Meta[];
    links?: Link[];
    children?: ReactNode;
}
export declare const HeadDocument: FC<HeadDocumentProps>;
export {};
//# sourceMappingURL=HeadDocument.d.ts.map