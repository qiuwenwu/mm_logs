require('./index.js');

/**
 * 测试调试输出
 */
async function test() {
	$.log.debug('activity.info.add', [{'nihao': '很好'}], 'nihao', '调试');
	$.log.info('activity.info.del', {'nihao': '很好'}, 'nihao', '信息');
	$.log.warn('activity.info.set', 'nihao', '警告');
	$.log.error('activity.info.get', 'nihao', '错误');
	$.log.success('activity.info.sort', 'nihao', '成功');
	$.log.http('web', '很好');
}

test();