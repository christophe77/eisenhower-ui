import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import useAskGptChat from './useAskGptChat';
export const AskGptChat = ({ REACT_APP_OPENAI_API_KEY, }) => {
    const { handleAsk, setQuestion, question, messages, isLoading } = useAskGptChat(REACT_APP_OPENAI_API_KEY);
    return (_jsxs("div", { className: "p-4 border rounded-lg shadow-lg bg-gray-900 text-white w-full max-w-lg", children: [_jsx("h2", { className: "text-lg font-bold", children: "Chat avec GPT \uD83D\uDE80" }), _jsx("div", { className: "my-4 p-2 h-64 overflow-y-auto border rounded bg-gray-800", children: messages.map((msg, index) => (_jsxs("p", { className: `p-2 my-1 rounded ${msg.role === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-700 text-gray-200'}`, children: [_jsx("strong", { children: msg.role === 'user' ? '👤 Toi :' : '🤖 GPT :' }), ' ', msg.content] }, `${msg.role}-${index}`))) }), _jsx("label", { htmlFor: "question", className: "block text-sm font-semibold", children: "Pose ta question :" }), _jsx("input", { id: "question", type: "text", className: "w-full p-2 mt-2 border rounded bg-gray-800", value: question, onChange: (e) => setQuestion(e.target.value), placeholder: "Tape ici..." }), _jsx("button", { className: "mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded disabled:bg-gray-600", onClick: handleAsk, disabled: isLoading, children: isLoading ? 'Chargement...' : 'Envoyer' })] }));
};
