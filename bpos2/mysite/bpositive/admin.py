from django.contrib import admin

# Register your models here.

from .models import Profile, Donation

admin.site.register(Profile)
admin.site.register(Donation)
