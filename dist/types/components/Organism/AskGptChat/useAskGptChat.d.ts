export default function useAskGptChat(REACT_APP_OPENAI_API_KEY: string): {
    handleAsk: () => Promise<void>;
    messages: {
        role: string;
        content: string;
    }[];
    question: string;
    setQuestion: import("react").Dispatch<import("react").SetStateAction<string>>;
    isLoading: boolean;
};
//# sourceMappingURL=useAskGptChat.d.ts.map