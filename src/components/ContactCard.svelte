<article class="contact-card">
    <h2>
        <slot name="name">
            <span class="missing">Unknown name</span>
        </slot>
    </h2>
    <div class="address">
        <slot name="address">
            <span class="missing">Unknow Address</span>
        </slot>
    </div>
    <div class="email">
        <slot name="email">
            <span class="missing">Unknow Email</span>
        </slot>
    </div>
</article>

<style>
    .contact-card {
        width: 300px;
        border: 1px solid #aaa;
        border-radius: 2px;
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
        padding: 1em;
        margin: 0 auto;
        font-family: "Cascadia Code";
    }
    .address,
    .email {
        padding: 0 0 0 1.5em;
        background: 0 0 no-repeat;
        background-size: 20px 20px;
        margin: 0 0 0.5em 0;
        line-height: 1.2;
    }

    .address {
        background-image: url(https://svelte.dev/tutorial/icons/map-marker.svg);
    }

    .email {
        background-image: url(https://svelte.dev/tutorial/icons/email.svg);
    }
    .missing {
        color: #999;
    }
    h2 {
        padding: 0 0 0.2em 0;
        margin: 0 0 1em 0;
        border-bottom: 1px solid #ff3e00;
    }
</style>
