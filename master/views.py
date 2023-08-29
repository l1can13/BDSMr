from django.views.generic import DetailView

from master.models import PortfolioFiles, Master


class MasterDetailView(DetailView):
    model = Master
    template_name = 'master/html/master.html'
    slug_field = 'alias'
    context_object_name = 'master'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        master = self.get_object()

        context['logo_image'] = 'source/common/logo.png'
        context['master'] = master

        return dict(context)
