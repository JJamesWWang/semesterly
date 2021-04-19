# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
import student.models as student_models
import timetable.models as timetable_models
from advising.models import Advisor


class Transcript(models.Model):
    owner = models.ForeignKey(student_models.Student,
                              related_name='owned_transcripts')
    advisors = models.ManyToManyField(
        student_models.Student, related_name='invited_transcripts')
    pending_advisors = models.ManyToManyField(
        Advisor, related_name='invited_transcripts')
    semester = models.ForeignKey(timetable_models.Semester)

    class Meta:
        unique_together = ['owner', 'semester']


class Comment(models.Model):
    author = models.ForeignKey(student_models.Student)
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
    transcript = models.ForeignKey(Transcript, related_name='comments')
