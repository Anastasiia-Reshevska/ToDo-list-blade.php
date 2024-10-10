<section class="to-do-list">
    <div class="to-do-list__container">
        <div class="to-do-list__content">
            <div class="to-do-list__title">
                <h1>To-Do list</h1>
                <h3>Главная задача на день, спланировать его. Планируй вместе с нами!</h3>
                <h4>Список дел</h4>
            </div>
            <ul class="to-do-list__filter">
                <li class="to-do-list__filter-item" data-action="all">Все задачи</li>
                <li class="to-do-list__filter-item" data-action="ready">Выполненные</li>
                <li class="to-do-list__filter-item" data-action="not-ready">Не выполненные задачи</li>
            </ul>
            <ul class="to-do-list__affairs" data-filter="all" id="to-do-list">
            </ul>
        </div>
        <form id="edit-form" data-mode="create">
            <div class="to-do-list__content">
                <h4>Добавить новую задачу</h4>
                <div>
                    <input id="new-task" type="text" name="task" placeholder="Текст задачи">
                </div>
                <div id="new-object"></div>
                <p>Что делаем, сколько времени тратим, какой результат получаем</p>
                <button class="to-do-list__task_add" type="submit">Добавить</button>
            </div>
        </form>
    </div>
</section>

<template id="to-do-list__template">
    <li class="to-do-list__item">
        <div class="to-do-list__task"></div>
        <div class="to-do-list__check">
            <button class="to-do-list__check_background to-do-list__check_background-mark" data-action="complete">
            </button>
            <button class="to-do-list__check_background to-do-list__check_background-cross" data-action="delete">
            </button>
            <button class="to-do-list__check_background to-do-list__check_background-edit" data-action="edit">
            </button>
        </div>
    </li>
</template>