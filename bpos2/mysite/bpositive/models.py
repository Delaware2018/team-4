from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, default=1)
    ROLE_CHOICES = (
                      ('Visitor', 'Visitor'),
                      ('Donor', 'Donor'),
                      ('Ambassador', 'Ambassador')
                      )
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='Visitor')
    
    donation_amt = models.IntegerField(default=0)

    def __str__(self):
        return self.user.username + ": " + self.role


class Donation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=1)
    donation_amt =  models.FloatField(default=0)

    def __str__(self):
        return self.user.username + ": " + str(self.donation_amt)




