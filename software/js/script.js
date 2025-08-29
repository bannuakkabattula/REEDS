$(document).ready(function () {
  // override jquery validate plugin defaults
  $.validator.setDefaults({
    highlight: function (element) {
      $(element).closest('.form-group').addClass('has-error');
    },
    unhighlight: function (element) {
      $(element).closest('.form-group').removeClass('has-error');
    },
    errorElement: 'span',
    errorClass: 'text-danger',
    errorPlacement: function (error, element) {
      if (element.parent('.input-group').length) {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    }
  });

  $("#contactForm").validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      phone: {
        required: true,
        minlength: 10
      },
      email: {
        required: true,
        email: true
      },
      service: {
        required: true
      },
      message: {
        required: true,
        minlength: 2
      }
    }

  });

});
