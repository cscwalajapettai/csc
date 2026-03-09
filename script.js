const syllabusData = {
        'DCA Python': [
                { day: 'DAY 1', topic: '<b>WINDOWS</b> - Computer Fundamentals - Introduction to OS/GUI - Paint Brush' },
                { day: 'DAY 2', topic: 'Notepad - Right Click Properties - Control Panel' },
                { day: 'DAY 3', topic: 'Wordpad - Windows Explorer' },
                { day: 'DAY 4', topic: '<b>MS-WORD</b> - Home Tab - Clipboard - Paragraph - Font Styles - Editing' },
                { day: 'DAY 5', topic: 'Insert Tab - Pages - Tables - Illustration - Links - Header & Footer - Text - Symbols' },
                { day: 'DAY 6', topic: 'Page Layout - Themes - Page Setup - Page Background - Paragraph - Arrange' },
                { day: 'DAY 7', topic: 'References - Table of Contents - Footnotes - Endnotes - Citations & Bibliography - Captions - Index' },
                { day: 'DAY 8', topic: 'Mailings - Letters and Envelopes - Mail Merge - Insert fields - Preview Results' },
                { day: 'DAY 9', topic: 'Review - Track Changes - Comment - Spelling & Grammar - Protect Document - View Tab - Document Views - Window Arrangements - Zoom Levels' },
                { day: 'DAY 10', topic: 'Macros' },
                { day: 'DAY 11', topic: 'Doubt Session' },
                { day: 'DAY 12', topic: 'Practical & Theory Exam' },
                { day: 'DAY 13', topic: '<b>MS-EXCEL</b> - Home Tab - Cell Formatting - Styles - Cell Editing - Font Setting - Insert Tab - Table - Illustrations - Introduction to Basic Formulas' },
                { day: 'DAY 14', topic: 'Insert Tab - Pivot Table - Charts - Hyperlinks - Text Functions - Date & Time Functions' },
                { day: 'DAY 15', topic: 'Page Layout Tab - Themes - Page Setup - Sheet Options - Arrange options - Data Tab - Import from Access - Data Sorting - Filter - Auto & Advance Filter - Data Tools - Outline' },
                { day: 'DAY 16', topic: 'Review Tab - Proofing - Comments - Protect Sheet & Workbook - Sharing - Track Changes - View Tab - Workbook Views - Window Arrangements - Math & Trig Functions' },
                { day: 'DAY 17', topic: 'Formulas Tab - Functions (Statistical, Logical, Lookup) - Names - Formula Auditing - Calculations' },
                { day: 'DAY 18', topic: 'Doubt Session' },
                { day: 'DAY 19', topic: 'Practical & Theory Exam' },
                { day: 'DAY 20', topic: '<b>MS-POWER POINT</b> - Introduction - Home Tab - Insert Tab - Design - Transition - Animation - Slide Show - Presentation - Slide Design - Format Background - Rehearse Timing - Custom Slide Show' },
                { day: 'DAY 21', topic: '<b>INTERNET</b> - Mail ID Creation - Send and Receive Mails - WhatsApp Web - Chatting - Locating Information - Downloading - Basics of Networking - ISP - DNS - IP - Optical Fibres - Surfing - Search Engines - Wi-Fi' },
                { day: 'DAY 22', topic: '<b>CHATGPT</b> - Intro to AI - History - Features - GPT Model - Prompt Engineering - Automate Tasks - Gain Insights - Integrating with Tools like Excel - Future of AI - Scope of AI - Job Roles - GPT Store - Open AI - Latest Updates' },
                { day: 'DAY 23', topic: '<b>PYTHON</b> - Introduction to Python - History - Features - Working with Python - Basic Syntax - Variable and Data Types - Operator and Expressions' },
                { day: 'DAY 24', topic: 'Conditional Statements - If - If-else - Nested if-else - Looping - For - While - Nested loops - Control Statements - Break - Continue - Pass' },
                { day: 'DAY 25', topic: 'Functions - Types of functions - Function Arguments - Anonymous functions - Global and local variables' },
                { day: 'DAY 26', topic: 'Modules - Importing module - Math module - Random module - Packages' },
                { day: 'DAY 27', topic: 'String Manipulation - Accessing Strings - Basic Operation - String slicing' },
                { day: 'DAY 28', topic: 'Lists - Introduction - Accessing list - Operations - Working with lists' },
                { day: 'DAY 29', topic: 'Tuple - Introduction - Accessing tuples - Operations' }
        ],
        'HDCA Programming': [
                { day: 'DAY 1-10', topic: 'Windows, MS-Office & Internet Fundamentals' },
                { day: 'DAY 11-20', topic: 'HTML5 & CSS3 Web Designing' },
                { day: 'DAY 21-30', topic: 'C & C++ Programming Basics' },
                { day: 'DAY 31-40', topic: 'Python Programming Core' },
                { day: 'DAY 41-45', topic: 'Projects & Certification' }
        ]
};

function openSyllabus(course) {
        const modal = document.getElementById('syllabusModal');
        const title = document.getElementById('modalCourseTitle');
        const tbody = document.getElementById('modalTableBody');
        const data = syllabusData[course] || [];

        title.innerHTML = course.includes('Python') ? course.replace('Python', '<em>Python</em>') : course;
        tbody.innerHTML = data.map(item => `
    <tr>
      <td class="theory-day">${item.day}</td>
      <td class="theory-topic">${item.topic}</td>
    </tr>
  `).join('');

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
}

function closeModal() {
        const modal = document.getElementById('syllabusModal');
        modal.classList.remove('active');
        document.body.style.overflow = '';
}

// Close on overlay click
document.getElementById('syllabusModal').addEventListener('click', (e) => {
        if (e.target.id === 'syllabusModal') closeModal();
});

const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                        setTimeout(() => entry.target.classList.add('up'), i * 100);
                        obs.unobserve(entry.target);
                }
        });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// EmailJS Form Submission
document.getElementById('enquiryForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const btn = document.getElementById('submitBtn');
        const originalText = btn.innerHTML;
        btn.innerHTML = 'Sending...';
        btn.disabled = true;

        // Collect form data
        const templateParams = {
                name: document.getElementById('fullname').value,
                email: document.getElementById('email_id').value,
                title: document.getElementById('course').value,
                message: document.getElementById('message').value + "\n\nPhone: " + document.getElementById('mobile').value
        };

        // Service ID and Template ID
        const serviceID = 'service_fvulr2v';
        const templateID = 'template_c6y5s5b';

        emailjs.send(serviceID, templateID, templateParams)
                .then(() => {
                        alert('Thank you! Your enquiry has been sent successfully. CSC Walajapet will contact you soon.');
                        document.getElementById('enquiryForm').reset();
                        btn.innerHTML = originalText;
                        btn.disabled = false;
                }, (err) => {
                        console.error('Failed to send email:', err);
                        alert('Oops! Something went wrong. Please try again later or call us directly.');
                        btn.innerHTML = originalText;
                        btn.disabled = false;
                });
});
