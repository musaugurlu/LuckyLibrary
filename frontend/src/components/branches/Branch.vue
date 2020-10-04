<!--
* Copyright (c) 2020 Musa Ugurlu
* Author: Musa Ugurlu
* Date: 09/20/2020 3:04:22 am
-->
<template>
    <!-- Listing Details Section Begin -->
    <section class="listing-details spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="listing__details__text">
                        <div class="listing__details__about">
                            <h4>Description</h4>
                            <p>{{branch.description}}</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="listing__sidebar">
                        <div class="listing__sidebar__contact">
                            <div class="listing__sidebar__contact__map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.7681456471705!2d-81.65988898487815!3d30.329112081779684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5b71823d5d43f%3A0x3b6a39728dac6947!2s303%20N%20Laura%20St%2C%20Jacksonville%2C%20FL%2032202!5e0!3m2!1sen!2sus!4v1593388331220!5m2!1sen!2sus"
                                    height="200" style="border:0;" allowfullscreen="" aria-hidden="false"
                                    tabindex="0"></iframe>
                                <img src="/img/map-icon.png" alt="">
                            </div>
                            <div class="listing__sidebar__contact__text">
                                <h4>{{branch.name}}</h4>
                                <ul>
                                    <li><span class="icon_pin_alt"></span> {{branch.address}}
                                        United States</li>
                                    <li><span class="icon_phone"></span> {{branch.phone}}</li>
                                    <li><span class="icon_mail_alt"></span> luckylibrary@musaugurlu.com</li>
                                    <li><span class="icon_globe-2"></span> https://luckylibrary.musaugurlu.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Listing Details Section End -->
</template>

<script>
export default {
    props: [ 'branch' ]
}
</script>