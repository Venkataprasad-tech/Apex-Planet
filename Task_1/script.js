document.addEventListener('DOMContentLoaded', function(){
    const newsletterBtn = document.getElementById('newsletterBtn');
    newsletterBtn.addEventListener('click', function() {
        const email = prompt('Please enter your email to subscribe to our newsletter.');
        if(email){
            if (email.includes('@') && email.includes('.')) {
                alert(`Thank you for subscribing with ${email}! We'll keep you updated.`);
            } else {
                alert('Please enter a valid email address.');
            }
        } else {
            alert('Subscription canceled.');
        }
    });
});