from django.db import models
from django.contrib.auth.models import User
from datetime import datetime, timedelta
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.
class Profile(models.Model):
    '''model representing user'''
    first_name = models.CharField(max_length=200, help_text="enter your first name")
    last_name = models.CharField(max_length=200, help_text="enter your last name")
    email = models.CharField(max_length=200, help_text="enter your email")
    ROLE_CHOICES = (
                      ('Visitor', 'Visitor'),
                      ('Donor', 'Donor'),
                      ('Ambassador', 'Ambassador')
                      )
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default='Visitor')
    
    donation_count = models.IntegerField(default=0) #amt of time donated

    def get_absolute_url(self):
    """Returns the url to access a particular author instance."""
        return reverse('profile-detail', args=[str(self.id)])

    def __str__(self):
        return self.name

from django.urls import reverse

class Donation(models.Model):
    donor = models.ForeignKey(Profile, on_delete=models.CASCADE)
#models.FloatField(validators=[MinValueValidator(1), MaxValueValidator(100000)], default=1)
