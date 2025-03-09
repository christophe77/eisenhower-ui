import useAskGptChat from './useAskGptChat';
interface AskGptChatProps  {
    REACT_APP_OPENAI_API_KEY : string
}
const AskGptChat = ({REACT_APP_OPENAI_API_KEY}:AskGptChatProps) => {
	const { handleAsk, setQuestion, question, messages, isLoading } = useAskGptChat(REACT_APP_OPENAI_API_KEY);

	return (
		<div className="p-4 border rounded-lg shadow-lg bg-gray-900 text-white w-full max-w-lg">
			<h2 className="text-lg font-bold">Chat avec GPT 🚀</h2>

			<div className="my-4 p-2 h-64 overflow-y-auto border rounded bg-gray-800">
				{messages.map((msg, index) => (
					<p
						key={index}
						className={`p-2 my-1 rounded ${
							msg.role === 'user'
								? 'bg-blue-600 text-white'
								: 'bg-gray-700 text-gray-200'
						}`}
					>
						<strong>{msg.role === 'user' ? '👤 Toi :' : '🤖 GPT :'}</strong>{' '}
						{msg.content}
					</p>
				))}
			</div>

			<label htmlFor="question" className="block text-sm font-semibold">
				Pose ta question :
			</label>
			<input
				id="question"
				type="text"
				className="w-full p-2 mt-2 border rounded bg-gray-800"
				value={question}
				onChange={(e) => setQuestion(e.target.value)}
				placeholder="Tape ici..."
			/>

			{/* Bouton d'envoi */}
			<button
				className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded disabled:bg-gray-600"
				onClick={handleAsk}
				disabled={isLoading}
			>
				{isLoading ? 'Chargement...' : 'Envoyer'}
			</button>
		</div>
	);
};

export default AskGptChat;
