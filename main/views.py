from django.shortcuts import render

from master.models import Master


def index(request):
    context = {
        'logo_image': 'source/common/logo.png',
        'masters': Master.objects.all()
    }

    return render(request, 'main/html/index.html', context)
