let questions = [
    {
        text: "What are the career options after BTech in Computer Science?",
        answers: ["You can become a software developer, data scientist, or pursue higher studies like MTech or MBA."]
    },
    {
        text: "How to prepare for BSc entrance exams?",
        answers: ["Focus on your 12th standard syllabus, especially in subjects like Physics, Chemistry, and Mathematics/Biology."]
    },
    {
        text: "What is the scope of BTech in Mechanical Engineering?",
        answers: ["Mechanical engineers can work in industries like automotive, aerospace, manufacturing, and also go for research and development."]
    },
    {
        text: "Can I pursue a master's degree abroad after BSc?",
        answers: ["Yes, many universities abroad accept students with a BSc for their master's programs. You may need to clear exams like GRE, TOEFL, or IELTS."]
    }
];

function postQuestion() {
    const questionInput = document.getElementById('question-input');
    const questionText = questionInput.value.trim();
    if (questionText) {
        const question = {
            text: questionText,
            answers: []
        };
        questions.push(question);
        questionInput.value = '';
        renderQuestions();
    }
}

function postAnswer(index) {
    const answerInput = document.getElementById(`answer-input-${index}`);
    const answerText = answerInput.value.trim();
    if (answerText) {
        questions[index].answers.push(answerText);
        answerInput.value = '';
        renderQuestions();
    }
}

function renderQuestions() {
    const questionsList = document.getElementById('questions-list');
    questionsList.innerHTML = '';
    questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `
            <h3>${question.text}</h3>
            <div class="answers">
                ${question.answers.map(answer => `<div class="answer">${answer}</div>`).join('')}
            </div>
            <div class="answer-form">
                <input type="text" id="answer-input-${index}" placeholder="Write an answer...">
                <button onclick="postAnswer(${index})">Post Answer</button>
            </div>
        `;
        questionsList.appendChild(questionElement);
    });
}

// Initial render of pre-asked questions
renderQuestions();
