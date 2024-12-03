"""user_auto_delete_in_days

Revision ID: ccbf9d322ae3
Revises: 4f045f53bef8
Create Date: 2024-04-22 12:37:35.439501

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ccbf9d322ae3'
down_revision = '4f045f53bef8'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('auto_delete_in_days', sa.Integer(), nullable=True))
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'auto_delete_in_days')
    # ### end Alembic commands ###
