// 채팅 메시지를 표시할 DOM
const apiKey = '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';
const apiEndpoint = 'https://api.openai.com/v1/chat/completions';

function addMessage(sender, message) {
	// 새로운 div 생성 및 클래스 추가
	const messageElement = $('<div></div>').addClass('message').text(`${sender}: ${message}`);
	// 채팅 메시지 목록에 새로운 메시지 추가
	$('#chat-messages').prepend(messageElement);
}

// ChatGPT API 요청
async function fetchAIResponse(prompt) {
	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${apiKey}`
		},
		body: JSON.stringify({
			model: "gpt-3.5-turbo",
			messages: [{
				role: "system",
				content: "당신은 사용자의 고민을 잘 들어주고 친구처럼 따뜻하게 말을 건네는 챗봇입니다. 편안하고 친근한 어조로 이야기하며, 공감을 잘 표현해 주세요. 사용자가 마음의 위로를 받을 수 있도록 다정하고 진심 어린 조언을 해 주세요."
			}, {
				role: "user",
				content: prompt
			}],
			temperature: 0.8,
			max_tokens: 1024,
			top_p: 1,
			frequency_penalty: 0.5,
			presence_penalty: 0.5
		}),
	};
	try {
		const response = await fetch(apiEndpoint, requestOptions);
		const data = await response.json();
		const aiResponse = data.choices[0].message.content;
		return aiResponse;
	} catch (error) {
		console.error('OpenAI API 호출 중 오류 발생:', error);
		return 'OpenAI API 호출 중 오류 발생';
	}
}

// 전송 버튼 클릭 이벤트 처리
$('#user-input button').on('click', async () => {
	const message = $('#user-input input').val().trim();
	if (message.length === 0) return;

	// 사용자 메시지 화면에 추가
	addMessage('나', message);
	$('#user-input input').val('');

	// ChatGPT API 요청 후 답변을 화면에 추가
	const aiResponse = await fetchAIResponse(message);
	addMessage('챗봇', aiResponse);
});

// 사용자 입력 필드에서 Enter 키 이벤트를 처리
$('#user-input input').on('keydown', (event) => {
	if (event.key === 'Enter') {
		$('#user-input button').click();
	}
});
