from unicodedata import category
from django.db import models

# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=255,null=False,blank=False)
    price = models.DecimalField(max_digits=6, decimal_places=2, null=False, blank=False)
    date = models.DateTimeField(auto_now_add=True)
    description = models.TextField()
    category = models.CharField(max_length=255, null=True, blank=True)
    image = models.ImageField(upload_to='uploads/images/', null=False, blank=False)

    def __str__(self):
        return self.name
