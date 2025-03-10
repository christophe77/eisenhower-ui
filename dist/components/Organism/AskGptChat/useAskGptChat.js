import { useOptimistic, useState, startTransition } from 'react';
export default function useAskGptChat(REACT_APP_OPENAI_API_KEY) {
    const [messages, setMessages] = useState([]);
    const [question, setQuestion] = useState('');
    const [isLoading, setIsLoading] = useOptimistic(false);
    const handleAsk = async () => {
        if (!question.trim()) {
            return;
        }
        startTransition(() => {
            setMessages((prev) => [...prev, { role: 'user', content: question }]);
            setIsLoading(true);
        });
        try {
            const res = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${REACT_APP_OPENAI_API_KEY}`,
                },
                body: JSON.stringify({
                    model: 'gpt-4',
                    messages: [...messages, { role: 'user', content: question }],
                }),
            });
            const data = await res.json();
            const responseText = data.choices[0]?.message?.content || 'Pas de réponse.';
            startTransition(() => {
                setMessages((prev) => [
                    ...prev,
                    { role: 'gpt', content: responseText },
                ]);
            });
        }
        catch (error) {
            startTransition(() => {
                setMessages((prev) => [
                    ...prev,
                    { role: 'gpt', content: `Erreur de connexion : ${error}` },
                ]);
            });
        }
        setIsLoading(false);
    };
    return { handleAsk, messages, question, setQuestion, isLoading };
}
