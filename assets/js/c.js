const scriptURL = 'https://script.google.com/macros/s/AKfycbwZCX5riqSgE9McEWfweoc1nAy7s88kLiIqk7SDxjg4Jh4U-0s/exec'
const formId = $('#contact-form')
formId.submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:scriptURL,
        data:formId.serialize(),
        method:"post",
        success:function (response){
            alert("Contact Form submitted successfully")
            window.location.reload()
            //window.location.href="https://website.com"
        },
        error:function (err){
            alert("Something Error, Try again later!")

        }
    })
})