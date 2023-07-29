from django.shortcuts import render


def index(request):
    context = {
        'logo_image': 'source/common/logo.png',
    }

    return render(request, 'main/html/index.html', context)
