document.addEventListener('DOMContentLoaded', () => {
    const toc = document.querySelector('.toc ul');
    const headings = document.querySelectorAll('h1, h2, h3');

    headings.forEach(heading => {
        const id = heading.id || heading.textContent.replace(/\s+/g, '-').toLowerCase();
        heading.id = id;

        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${id}`;
        a.textContent = heading.textContent;
        li.appendChild(a);
        toc.appendChild(li);
    });
});
