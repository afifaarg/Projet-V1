from django.shortcuts import render
from django.views.generic.base import TemplateView
class batiment(TemplateView):
    template_name = "home/apropos.html"
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)   
        return context
