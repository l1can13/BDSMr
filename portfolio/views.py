from django.shortcuts import render


def portfolio(request):
    return render(request, 'portfolio/html/portfolio.html')
