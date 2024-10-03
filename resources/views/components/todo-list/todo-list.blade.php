<section class="to-do-list">
    <div class="to-do-list__container">
        <div class="to-do-list__content">
            <div class="to-do-list__title">
                <h1>To-Do list</h1>
                <h3>Главная задача на день, спланировать его. Планируй вместе с нами!</h3>
                <h4>Список дел</4h>
            </div>
            <ul class="to-do-list__affairs" id="to-do-list">
            </ul>
        </div>
        <form id="edit-form" data-mode="create" data-editId="">
            <div class="to-do-list__content">
                <h4>Добавить новую задачу</h4>
                <div>
                    <input type="text" name="task" placeholder="Текст задачи">
                </div>
                <p>Что делаем, сколько времени тратим, какой результат получаем</p>
                <button class="to-do-list__add_task" type="submit">Добавить</button>
            </div>
    </div>
    </form>
</section>

<template id="to-do-list__template">
    <li class="to-do-list__item">
        <div class="to-do-list__task"></div>
        <div class="to-do-list__check">
            <button class="to-do-list__check_background" data-action="complete">
                <div class="to-do-list__check_mark"></div>
            </button>

            <button class="to-do-list__check_background" data-action="delete">
                <div class="to-do-list__cross"></div>
            </button>
            <button class="to-do-list__check_background" data-action="edit">
                <svg class="to-do-list__edit" width="40" height="25" aria-hidden="true">
                    <use href="#icon-edit"/>
                </svg>
            </button>
        </div>
    </li>

</template>