from django.shortcuts import render


def faq(request):
    context = {
        'logo_image': 'source/common/logo.png',
    }

    return render(request, 'faq/html/faq.html', context)
