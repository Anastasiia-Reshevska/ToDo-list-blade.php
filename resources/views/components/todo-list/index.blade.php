<section class="to-do-list">
    <div class="to-do-list__container">
        <div class="to-do-list__content">
            <div class="to-do-list__title">
                <h1>To-Do list</h1>
                <h2>Главная задача на день, спланировать его. Планируй вместе с нами!</h3>
                <p>Список дел</p>
            </div>
            <div class="to-do-list__filter">
                <div class="to-do-list__filter-item">
                    <input id="input-all" type="radio" value="all" name="filter" checked>
                    <label for="input-all">Все задачи</label>
                </div>

                <div class="to-do-list__filter-item">
                    <input id="input-ready" type="radio" value="ready" name="filter">
                    <label for="input-ready">Выполненные</label>
                </div>

                <div class="to-do-list__filter-item">
                    <input id="input-not-ready" type="radio" value="not-ready" name="filter">
                    <label for="input-not-ready">Не выполненные</label>
                </div>
            </div>
            <ul class="to-do-list__affairs" data-filter="all" id="to-do-list">
            </ul>
        </div>
        <form id="edit-form" data-mode="create">
            <div class="to-do-list__content">
                <h4>Добавить или отредактировать задачу</h4>
                <div>
                    <input class="to-do-list__content_new-task-input" id="new-task" type="text" name="task" placeholder="Текст задачи">
                    <label class="to-do-list__content_new-task-label" for="new-task">Все задачи</label>
                </div>
                <div id="new-object"></div>
                <p>Что делаем, сколько времени тратим, какой результат получаем</p>
                <button class="to-do-list__task_add" type="submit">Сохранить</button>
            </div>
        </form>
    </div>
</section>

<template id="to-do-list__template">
    <li class="to-do-list__item">
        <div class="to-do-list__task"></div>
        <div class="to-do-list__check">
            <button title="Complete task" aria-label="Complete task" class="to-do-list__check_bg to-do-list__check_bg-mark" data-action="complete">
            </button>
            <button title="Delete task" aria-label="Delete task" class="to-do-list__check_bg to-do-list__check_bg-cross" data-action="delete">
            </button>
            <button title="Edit task" aria-label="Edit task" class="to-do-list__check_bg to-do-list__check_bg-edit" data-action="edit">
            </button>
        </div>
    </li>
</template>