from django.contrib import admin

from master.models import Master, PortfolioFiles

admin.site.unregister(Master)
admin.site.unregister(PortfolioFiles)


class PortfolioFilesInline(admin.TabularInline):
    model = PortfolioFiles


@admin.register(Master)
class MasterAdmin(admin.ModelAdmin):
    inlines = [PortfolioFilesInline]


admin.site.register(PortfolioFiles)
