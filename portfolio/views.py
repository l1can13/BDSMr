from django.shortcuts import render


def portfolio(request):
    context = {
        'logo_image': 'source/common/logo.png',
    }

    return render(request, 'portfolio/html/portfolio.html', context)
