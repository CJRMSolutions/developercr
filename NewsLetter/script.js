let currentRow = null;

function openPopup(row) {
    currentRow = row;
    document.getElementById('task-name').value = row.cells[0].innerHTML;
    document.getElementById('owner').value = row.cells[1].innerHTML;
    document.getElementById('start-date').value = row.cells[2].innerHTML;
    document.getElementById('end-date').value = row.cells[3].innerHTML;
    document.getElementById('status').value = row.cells[4].innerHTML;
    document.getElementById('comments').value = row.cells[5].innerHTML;
    document.getElementById('popup').style.display = "block";
}

function closePopup() {
    document.getElementById('popup').style.display = "none";
}

function saveTask() {
    currentRow.cells[0].innerHTML = document.getElementById('task-name').value;
    currentRow.cells[1].innerHTML = document.getElementById('owner').value;
    currentRow.cells[2].innerHTML = document.getElementById('start-date').value;
    currentRow.cells[3].innerHTML = document.getElementById('end-date').value;
    currentRow.cells[4].innerHTML = document.getElementById('status').value;
    currentRow.cells[5].innerHTML = document.getElementById('comments').value;
    closePopup();
}

function openAddPopup() {
    document.getElementById('add-form').reset();
    document.getElementById('add-popup').style.display = "block";
}

function closeAddPopup() {
    document.getElementById('add-popup').style.display = "none";
}

function addTask() {
    const table = document.getElementById('planner-body');
    const row = table.insertRow();
    row.onclick = function() { openPopup(row) };
    row.insertCell(0).innerHTML = document.getElementById('add-task-name').value;
    row.insertCell(1).innerHTML = document.getElementById('add-owner').value;
    row.insertCell(2).innerHTML = document.getElementById('add-start-date').value;
    row.insertCell(3).innerHTML = document.getElementById('add-end-date').value;
    row.insertCell(4).innerHTML = document.getElementById('add-status').value;
    row.insertCell(5).innerHTML = document.getElementById('add-comments').value;
    closeAddPopup();
}

///

let currentProjectId = null;

function openEditPopup(projectId) {
    currentProjectId = projectId;
    const project = document.querySelector(`.project[data-id="${projectId}"]`);
    document.getElementById('edit-project-name').value = project.querySelector('.project-name').textContent;
    document.getElementById('edit-start-date').value = project.querySelector('.project-bar').getAttribute('data-start-date');
    document.getElementById('edit-end-date').value = project.querySelector('.project-bar').getAttribute('data-end-date');
    document.getElementById('popup').style.display = "block";
}

function closePopup() {
    document.getElementById('popup').style.display = "none";
}

function saveProject() {
    const projectName = document.getElementById('edit-project-name').value;
    const startDate = document.getElementById('edit-start-date').value;
    const endDate = document.getElementById('edit-end-date').value;

    const project = document.querySelector(`.project[data-id="${currentProjectId}"]`);
    project.querySelector('.project-name').textContent = projectName;
    const projectBar = project.querySelector('.project-bar');
    projectBar.setAttribute('data-start-date', startDate);
    projectBar.setAttribute('data-end-date', endDate);

    const startMonth = new Date(startDate).getMonth();
    const endMonth = new Date(endDate).getMonth();
    const duration = endMonth - startMonth + 1;

    projectBar.style.left = `${14.28 + startMonth * (85.72 / 12)}%`; /* Adjust left position within months section */
    projectBar.style.width = `${duration * (85.72 / 12)}%`; /* Adjust width based on duration */

    closePopup();
}

function deleteProject(projectId) {
    document.querySelector(`.project[data-id="${projectId}"]`).remove();
}

function openAddPopup() {
    document.getElementById('add-form').reset();
    document.getElementById('add-popup').style.display = "block";
}

function closeAddPopup() {
    document.getElementById('add-popup').style.display = "none";
}

function addProject() {
    const projectName = document.getElementById('add-project-name').value;
    const startDate = document.getElementById('add-start-date').value;
    const endDate = document.getElementById('add-end-date').value;

    const startMonth = new Date(startDate).getMonth();
    const endMonth = new Date(endDate).getMonth();
    const duration = endMonth - startMonth + 1;

    const projectId = new Date().getTime(); // Using timestamp as a unique ID
    const projectHTML = `
        <div class="project" data-id="${projectId}">
            <div class="project-name">${projectName}</div>
            <div class="project-bar" style="left: ${14.28 + startMonth * (85.72 / 12)}%; width: ${duration * (85.72 / 12)}%;" data-start-date="${startDate}" data-end-date="${endDate}"></div>
            <div class="actions">
                <button class="edit-btn" onclick="openEditPopup(${projectId})">Edit</button>
                <button class="delete-btn" onclick="deleteProject(${projectId})">Delete</button>
            </div>
        </div>
    `;
    document.querySelector('.projects').insertAdjacentHTML('beforeend', projectHTML);
    closeAddPopup();
}
