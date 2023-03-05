<template>
    <h1>Contact Me</h1>
    <div class="contact-form">
        <div class="socials">
            <p>You can find me on my socials here:</p>
            <a href="https://www.instagram.com/jboardmanlife/" class="fa fa-instagram"></a>
            <a href="https://www.linkedin.com/in/jacob-boardman-411190109/" class="fa fa-linkedin"></a>
            <a href="https://twitter.com/bordy1996" class="fa fa-twitter"></a>
        </div>
        <h3>Contact me:</h3>
        <form action="./success.html">
            <label for="fname">First name:</label><br>
            <input type="text" id="fname" name="fname" value="" maxlength="15"><br>
            <label for="lname">Last name:</label><br>
            <input type="text" id="lname" name="lname" value="" maxlength="20"><br>
            <label for="femail">Email</label><br>
            <input type="email" id="femail" name="femail" value="" required><br>
            <label for="fmessage">Message</label><br>
            <textarea id="fmessage" name="fmessage" value="" required></textarea><br>
            <input type="submit" value="Submit">
        </form>
    </div>
</template>