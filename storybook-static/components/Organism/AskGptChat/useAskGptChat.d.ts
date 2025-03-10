export default function useAskGptChat(REACT_APP_OPENAI_API_KEY: string): {
    handleAsk: () => Promise<void>;
    messages: {
        role: string;
        content: string;
    }[];
    question: string;
    setQuestion: import('../../../../node_modules/react').Dispatch<import('../../../../node_modules/react').SetStateAction<string>>;
    isLoading: boolean;
};
//# sourceMappingURL=useAskGptChat.d.ts.map