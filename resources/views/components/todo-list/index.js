(function () {
  const itemTemplate = document.getElementById('to-do-list__template');
  const listElement = document.getElementById('to-do-list');
  const editForm = document.getElementById('edit-form');
  if (!itemTemplate || !listElement || !editForm) return null;

  function makeId() {
    const date = new Date().valueOf();
    return `itemid-${date}`;
  }

  showTasksFromLocalStorage();

  editForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(editForm);
    const data = Object.fromEntries(formData.entries());

    if (data.task) {
      if (editForm.dataset.mode === 'create') {
        const newId = makeId();
        const newTask = {
          id: newId,
          text: data.task,
          isComplete: false,
        };
        createTask(newTask);
        addTaskLocalStorage(newTask);
      } else if (editForm.dataset.mode === 'edit') {
        const taskId = editForm.dataset.editId;
        editTask(taskId, data.task);
        editTaskFromLocalStorage(taskId, data.task);
      }
      editForm.reset();
      editForm.dataset.mode = 'create';
      editForm.dataset.editId = '';
    }
  });

  function editTask(taskId, taskText) {
    const listItem = listElement.querySelector('#' + taskId);
    listItem.querySelector('.to-do-list__task').innerText = taskText;
  }

  function createTask(task) {
    const listItem = itemTemplate.content.cloneNode(true);
    const listItemElement = listItem.querySelector('.to-do-list__item');
    listItemElement.setAttribute('id', task.id);
    listItemElement.querySelector('.to-do-list__task').innerText = task.text;
    listElement.append(listItem);
    if (task.isComplete) {
      listItemElement.classList.add('js-to-do-list__item_complete');
    }
  }

  function addTaskLocalStorage(task) {
    let tasks = [];
    if (localStorage.getItem('tasks')) {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function showTasksFromLocalStorage(task) {
    let tasks = localStorage.getItem('tasks');

    if (tasks) {
      tasks = JSON.parse(tasks); //преобразовали массива переменной в объект
      tasks.forEach((item) => {
        createTask(item);
      });
    }
  }

  function setCompleteTaskLocalStorage(taskId, isComplete) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach((item) => {
      if (item.id === taskId) {
        item.isComplete = isComplete;
      }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function removeTaskFromLocalStorage(taskId) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter((item) => item.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function editTaskFromLocalStorage(taskId, taskText) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach((item) => {
      if (item.id === taskId) {
        item.text = taskText;
      }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function editItem(element) {
    editForm.dataset.mode = 'edit';
    editForm.dataset.editId = element.id;
    editForm.querySelector('[name=task]').value =
      element.querySelector('.to-do-list__task').innerText;
  }

  function deleteItem(element) {
    const elemId = element.id;
    element.remove();
    removeTaskFromLocalStorage(elemId);
  }

  function toggleItemCompletion(element) {
    const elemId = element.id;
    let isComplete = true;
    if (element.classList.contains('js-to-do-list__item_complete')) {
      isComplete = false;
    }
    element.classList.toggle('js-to-do-list__item_complete');
    setCompleteTaskLocalStorage(elemId, isComplete);
  }

  listElement.addEventListener('click', (event) => {
    const item = event.target.closest('.to-do-list__item');
    if (!item) return null;

    switch (event.target.dataset.action) {
      case 'edit':
        editItem(item);
        break;
      case 'delete':
        deleteItem(item);
        break;
      case 'complete':
        toggleItemCompletion(item);
        break;
      default:
        return;
    }
  });
})();

(function () {
  const inputNameFilter = document.querySelector('input[name="filter"]');
  const inputNameFilterAll = document.querySelectorAll('input[name="filter"]');
  if (!inputNameFilter || !inputNameFilterAll) return null;

  if (inputNameFilter) {
    inputNameFilterAll.forEach((elem) => {
      elem.addEventListener('change', function (event) {
        const classSource = document.querySelector('.to-do-list__affairs');
        if (!classSource) return null;
        classSource.classList.remove(
          'js__show-all',
          'js__show-ready',
          'js__show-not-ready'
        );
        const TYPES_CONFIG = {
          'all': 'js__show-all',
          'ready': 'js__show-ready',
          'not-ready': 'js__show-not-ready',
        };
        const filterAction = event.target.value;
        classSource.classList.add(TYPES_CONFIG[filterAction]);
      });
    });
  }
})();
