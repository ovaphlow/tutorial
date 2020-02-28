# -*- coding: utf-8 -*-
import logging
import scrapy


class JdSpider(scrapy.Spider):
    name = 'jd'
    allowed_domains = ['jd.com']
    start_urls = ['https://item.jd.com/41596751702.html?dist=jd']

    def __init__(self, *args, **kwargs):
        logger = logging.getLogger('scrapy.spidermiddleware.httperror')
        logger.setLevel(logging.INFO)
        super().__init__(*args, **kwargs)

    def parse(self, response):
        item_id = response.url.split('/')[3].split('.html')[0]
        self.log('商品ID %s' % item_id)
        # pass
