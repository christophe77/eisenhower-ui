import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
export const HeadDocument = ({ title = '', metas, links, children, }) => {
    return (_jsxs(_Fragment, { children: [_jsx("title", { children: title }), links?.map((link, linkIndex) => (_jsx("link", { rel: link.rel, href: link.href }, `${link.rel}-${linkIndex}`))), metas?.map((meta, metaIndex) => (_jsx("meta", { name: meta.name, content: meta.content }, `${meta.name}-${metaIndex}`))), children] }));
};
