(function () {
  const itemTemplate = document.getElementById('to-do-list__template');
  if (!itemTemplate) return null;
  const listElement = document.getElementById('to-do-list');
  if (!listElement) return null;
  const editForm = document.getElementById('edit-form');
  if (!editForm) return null;

  let id = 0;
  function* makeId() {
    while (true) {
      yield id++;
    }
  }

  const idGenerator = makeId();

  editForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formDate = new FormData(editForm);
    const data = Object.fromEntries(formDate.entries());
    let listItem;

    if (data.task) {
      if (editForm.dataset.mode === 'create') {
        listItem = itemTemplate.content.cloneNode(true);
        listItem
          .querySelector('.to-do-list__item')
          .setAttribute('id', `itemid-${idGenerator.next().value}`);
        listItem.querySelector('.to-do-list__task').innerText = data.task;
        if (!listItem) return null;

        listElement.append(listItem);
      } else if (editForm.dataset.mode === 'edit') {
        console.log(editForm.dataset.editId);
        listItem = listElement.querySelector(`#${editForm.dataset.editId}`);
        listItem.querySelector('.to-do-list__task').innerText = data.task;
        if (!listItem) return null;
      }
      editForm.reset();
      editForm.dataset.mode = 'create';
      editForm.dataset.editId = '';
    }
  });

  function editItem(element) {
    editForm.dataset.mode = 'edit';
    editForm.dataset.editId = element.id;
    editForm.querySelector('[name=task]').value =
      element.querySelector('.to-do-list__task').innerText;
  }

  function deleteItem(element) {
    element.remove();
  }

  function toggleItemCompletion(element) {
    element.classList.toggle('to-do-list__item_complete');
  }

  listElement.addEventListener('click', (event) => {
    const item = event.target.closest('.to-do-list__item');

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
